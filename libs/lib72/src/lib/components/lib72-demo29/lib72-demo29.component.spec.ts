import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo29Component } from './lib72-demo29.component';

describe('Lib72Demo29Component', () => {
  let component: Lib72Demo29Component;
  let fixture: ComponentFixture<Lib72Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
