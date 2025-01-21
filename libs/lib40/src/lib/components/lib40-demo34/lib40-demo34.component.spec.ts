import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo34Component } from './lib40-demo34.component';

describe('Lib40Demo34Component', () => {
  let component: Lib40Demo34Component;
  let fixture: ComponentFixture<Lib40Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
