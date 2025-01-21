import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo29Component } from './lib40-demo29.component';

describe('Lib40Demo29Component', () => {
  let component: Lib40Demo29Component;
  let fixture: ComponentFixture<Lib40Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
