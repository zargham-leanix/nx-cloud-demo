import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo44Component } from './lib21-demo44.component';

describe('Lib21Demo44Component', () => {
  let component: Lib21Demo44Component;
  let fixture: ComponentFixture<Lib21Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
