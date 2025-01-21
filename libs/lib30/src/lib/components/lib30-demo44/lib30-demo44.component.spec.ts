import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo44Component } from './lib30-demo44.component';

describe('Lib30Demo44Component', () => {
  let component: Lib30Demo44Component;
  let fixture: ComponentFixture<Lib30Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
