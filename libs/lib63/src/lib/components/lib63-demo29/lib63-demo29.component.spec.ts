import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo29Component } from './lib63-demo29.component';

describe('Lib63Demo29Component', () => {
  let component: Lib63Demo29Component;
  let fixture: ComponentFixture<Lib63Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
