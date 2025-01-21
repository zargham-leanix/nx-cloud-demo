import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo25Component } from './lib76-demo25.component';

describe('Lib76Demo25Component', () => {
  let component: Lib76Demo25Component;
  let fixture: ComponentFixture<Lib76Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
