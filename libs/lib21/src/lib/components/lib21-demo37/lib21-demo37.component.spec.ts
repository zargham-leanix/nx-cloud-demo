import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo37Component } from './lib21-demo37.component';

describe('Lib21Demo37Component', () => {
  let component: Lib21Demo37Component;
  let fixture: ComponentFixture<Lib21Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
