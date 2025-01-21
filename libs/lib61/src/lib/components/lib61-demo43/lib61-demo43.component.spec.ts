import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo43Component } from './lib61-demo43.component';

describe('Lib61Demo43Component', () => {
  let component: Lib61Demo43Component;
  let fixture: ComponentFixture<Lib61Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
