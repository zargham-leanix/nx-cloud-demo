import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo8Component } from './lib40-demo8.component';

describe('Lib40Demo8Component', () => {
  let component: Lib40Demo8Component;
  let fixture: ComponentFixture<Lib40Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
