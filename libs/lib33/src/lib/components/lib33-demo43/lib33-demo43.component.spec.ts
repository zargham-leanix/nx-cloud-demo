import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo43Component } from './lib33-demo43.component';

describe('Lib33Demo43Component', () => {
  let component: Lib33Demo43Component;
  let fixture: ComponentFixture<Lib33Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
