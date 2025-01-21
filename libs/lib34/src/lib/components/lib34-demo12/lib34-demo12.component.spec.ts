import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo12Component } from './lib34-demo12.component';

describe('Lib34Demo12Component', () => {
  let component: Lib34Demo12Component;
  let fixture: ComponentFixture<Lib34Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
