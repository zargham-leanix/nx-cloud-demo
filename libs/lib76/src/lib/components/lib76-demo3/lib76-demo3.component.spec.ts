import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo3Component } from './lib76-demo3.component';

describe('Lib76Demo3Component', () => {
  let component: Lib76Demo3Component;
  let fixture: ComponentFixture<Lib76Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
