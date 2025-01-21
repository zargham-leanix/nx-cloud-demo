import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo4Component } from './lib14-demo4.component';

describe('Lib14Demo4Component', () => {
  let component: Lib14Demo4Component;
  let fixture: ComponentFixture<Lib14Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
