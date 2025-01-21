import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo10Component } from './lib34-demo10.component';

describe('Lib34Demo10Component', () => {
  let component: Lib34Demo10Component;
  let fixture: ComponentFixture<Lib34Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
