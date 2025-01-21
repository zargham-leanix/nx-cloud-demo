import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo23Component } from './lib34-demo23.component';

describe('Lib34Demo23Component', () => {
  let component: Lib34Demo23Component;
  let fixture: ComponentFixture<Lib34Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
