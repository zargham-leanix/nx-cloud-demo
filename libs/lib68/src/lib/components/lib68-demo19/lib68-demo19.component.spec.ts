import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo19Component } from './lib68-demo19.component';

describe('Lib68Demo19Component', () => {
  let component: Lib68Demo19Component;
  let fixture: ComponentFixture<Lib68Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
