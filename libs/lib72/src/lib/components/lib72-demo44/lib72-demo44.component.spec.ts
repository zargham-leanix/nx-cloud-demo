import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo44Component } from './lib72-demo44.component';

describe('Lib72Demo44Component', () => {
  let component: Lib72Demo44Component;
  let fixture: ComponentFixture<Lib72Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
