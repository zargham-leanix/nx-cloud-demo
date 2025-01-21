import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo19Component } from './lib34-demo19.component';

describe('Lib34Demo19Component', () => {
  let component: Lib34Demo19Component;
  let fixture: ComponentFixture<Lib34Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
