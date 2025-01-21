import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo31Component } from './lib34-demo31.component';

describe('Lib34Demo31Component', () => {
  let component: Lib34Demo31Component;
  let fixture: ComponentFixture<Lib34Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
