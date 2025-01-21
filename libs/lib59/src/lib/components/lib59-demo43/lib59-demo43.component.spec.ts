import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo43Component } from './lib59-demo43.component';

describe('Lib59Demo43Component', () => {
  let component: Lib59Demo43Component;
  let fixture: ComponentFixture<Lib59Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
