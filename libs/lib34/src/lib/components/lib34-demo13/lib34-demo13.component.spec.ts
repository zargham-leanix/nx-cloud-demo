import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo13Component } from './lib34-demo13.component';

describe('Lib34Demo13Component', () => {
  let component: Lib34Demo13Component;
  let fixture: ComponentFixture<Lib34Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
