import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo31Component } from './lib36-demo31.component';

describe('Lib36Demo31Component', () => {
  let component: Lib36Demo31Component;
  let fixture: ComponentFixture<Lib36Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
