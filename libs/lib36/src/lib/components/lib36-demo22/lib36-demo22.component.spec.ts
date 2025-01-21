import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo22Component } from './lib36-demo22.component';

describe('Lib36Demo22Component', () => {
  let component: Lib36Demo22Component;
  let fixture: ComponentFixture<Lib36Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
