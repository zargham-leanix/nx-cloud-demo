import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo39Component } from './lib56-demo39.component';

describe('Lib56Demo39Component', () => {
  let component: Lib56Demo39Component;
  let fixture: ComponentFixture<Lib56Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
