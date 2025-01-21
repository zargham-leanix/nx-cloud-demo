import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo29Component } from './lib29-demo29.component';

describe('Lib29Demo29Component', () => {
  let component: Lib29Demo29Component;
  let fixture: ComponentFixture<Lib29Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
