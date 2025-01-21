import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo12Component } from './lib76-demo12.component';

describe('Lib76Demo12Component', () => {
  let component: Lib76Demo12Component;
  let fixture: ComponentFixture<Lib76Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
