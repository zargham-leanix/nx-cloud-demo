import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo8Component } from './lib76-demo8.component';

describe('Lib76Demo8Component', () => {
  let component: Lib76Demo8Component;
  let fixture: ComponentFixture<Lib76Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
