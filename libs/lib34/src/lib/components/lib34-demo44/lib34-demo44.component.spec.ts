import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo44Component } from './lib34-demo44.component';

describe('Lib34Demo44Component', () => {
  let component: Lib34Demo44Component;
  let fixture: ComponentFixture<Lib34Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
