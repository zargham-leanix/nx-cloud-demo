import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo46Component } from './lib40-demo46.component';

describe('Lib40Demo46Component', () => {
  let component: Lib40Demo46Component;
  let fixture: ComponentFixture<Lib40Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
