import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo19Component } from './lib9-demo19.component';

describe('Lib9Demo19Component', () => {
  let component: Lib9Demo19Component;
  let fixture: ComponentFixture<Lib9Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
