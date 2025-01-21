import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo23Component } from './lib47-demo23.component';

describe('Lib47Demo23Component', () => {
  let component: Lib47Demo23Component;
  let fixture: ComponentFixture<Lib47Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
