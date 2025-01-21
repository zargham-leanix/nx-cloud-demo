import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo8Component } from './lib34-demo8.component';

describe('Lib34Demo8Component', () => {
  let component: Lib34Demo8Component;
  let fixture: ComponentFixture<Lib34Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
