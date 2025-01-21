import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo4Component } from './lib76-demo4.component';

describe('Lib76Demo4Component', () => {
  let component: Lib76Demo4Component;
  let fixture: ComponentFixture<Lib76Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
