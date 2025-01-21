import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo34Component } from './lib34-demo34.component';

describe('Lib34Demo34Component', () => {
  let component: Lib34Demo34Component;
  let fixture: ComponentFixture<Lib34Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
