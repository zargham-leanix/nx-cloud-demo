import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo43Component } from './lib21-demo43.component';

describe('Lib21Demo43Component', () => {
  let component: Lib21Demo43Component;
  let fixture: ComponentFixture<Lib21Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
