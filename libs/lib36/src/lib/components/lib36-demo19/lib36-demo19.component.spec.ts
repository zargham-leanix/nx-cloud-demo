import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo19Component } from './lib36-demo19.component';

describe('Lib36Demo19Component', () => {
  let component: Lib36Demo19Component;
  let fixture: ComponentFixture<Lib36Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
