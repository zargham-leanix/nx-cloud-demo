import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo6Component } from './lib76-demo6.component';

describe('Lib76Demo6Component', () => {
  let component: Lib76Demo6Component;
  let fixture: ComponentFixture<Lib76Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
