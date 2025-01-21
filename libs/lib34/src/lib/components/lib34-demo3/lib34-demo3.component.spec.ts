import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo3Component } from './lib34-demo3.component';

describe('Lib34Demo3Component', () => {
  let component: Lib34Demo3Component;
  let fixture: ComponentFixture<Lib34Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
