import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo26Component } from './lib34-demo26.component';

describe('Lib34Demo26Component', () => {
  let component: Lib34Demo26Component;
  let fixture: ComponentFixture<Lib34Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
