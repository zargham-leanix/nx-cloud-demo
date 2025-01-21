import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo46Component } from './lib34-demo46.component';

describe('Lib34Demo46Component', () => {
  let component: Lib34Demo46Component;
  let fixture: ComponentFixture<Lib34Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
