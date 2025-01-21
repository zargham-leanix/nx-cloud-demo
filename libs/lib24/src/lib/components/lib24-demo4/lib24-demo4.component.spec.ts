import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo4Component } from './lib24-demo4.component';

describe('Lib24Demo4Component', () => {
  let component: Lib24Demo4Component;
  let fixture: ComponentFixture<Lib24Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
