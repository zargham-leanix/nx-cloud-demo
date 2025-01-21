import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo23Component } from './lib93-demo23.component';

describe('Lib93Demo23Component', () => {
  let component: Lib93Demo23Component;
  let fixture: ComponentFixture<Lib93Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
