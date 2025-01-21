import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo25Component } from './lib40-demo25.component';

describe('Lib40Demo25Component', () => {
  let component: Lib40Demo25Component;
  let fixture: ComponentFixture<Lib40Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
