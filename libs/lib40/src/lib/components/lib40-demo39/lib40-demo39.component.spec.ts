import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo39Component } from './lib40-demo39.component';

describe('Lib40Demo39Component', () => {
  let component: Lib40Demo39Component;
  let fixture: ComponentFixture<Lib40Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
