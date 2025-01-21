import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo4Component } from './lib21-demo4.component';

describe('Lib21Demo4Component', () => {
  let component: Lib21Demo4Component;
  let fixture: ComponentFixture<Lib21Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
