import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo23Component } from './lib25-demo23.component';

describe('Lib25Demo23Component', () => {
  let component: Lib25Demo23Component;
  let fixture: ComponentFixture<Lib25Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
