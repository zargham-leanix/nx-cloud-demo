import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo10Component } from './lib36-demo10.component';

describe('Lib36Demo10Component', () => {
  let component: Lib36Demo10Component;
  let fixture: ComponentFixture<Lib36Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
