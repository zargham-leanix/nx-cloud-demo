import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo4Component } from './lib36-demo4.component';

describe('Lib36Demo4Component', () => {
  let component: Lib36Demo4Component;
  let fixture: ComponentFixture<Lib36Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
