import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo42Component } from './lib34-demo42.component';

describe('Lib34Demo42Component', () => {
  let component: Lib34Demo42Component;
  let fixture: ComponentFixture<Lib34Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
