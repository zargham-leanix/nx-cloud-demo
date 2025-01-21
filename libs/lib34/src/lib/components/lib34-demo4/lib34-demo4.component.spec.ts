import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo4Component } from './lib34-demo4.component';

describe('Lib34Demo4Component', () => {
  let component: Lib34Demo4Component;
  let fixture: ComponentFixture<Lib34Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
