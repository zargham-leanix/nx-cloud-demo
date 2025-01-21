import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo4Component } from './lib86-demo4.component';

describe('Lib86Demo4Component', () => {
  let component: Lib86Demo4Component;
  let fixture: ComponentFixture<Lib86Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
