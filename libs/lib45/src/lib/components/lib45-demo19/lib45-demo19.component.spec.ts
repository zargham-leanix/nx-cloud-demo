import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo19Component } from './lib45-demo19.component';

describe('Lib45Demo19Component', () => {
  let component: Lib45Demo19Component;
  let fixture: ComponentFixture<Lib45Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
